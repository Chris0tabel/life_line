<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     *
     */
    public function public()
    {
        // Fetch users with pagination
        $users = User::paginate(10);
        $paginationMeta = [
            'current_page' => $users->currentPage(),
            'total_pages' => $users->lastPage(),
            'total_items' => $users->total()
        ];
        // Return the Inertia component with users data and pagination meta
        return Inertia::render('Profile/Public', [
            'users' => $users->items(),
            'meta' => $paginationMeta
        ]);
    }

    public function private()
    {
        // Fetch users with pagination
        $users = User::paginate(10);

        // Return the Inertia component with users data and pagination meta
        return Inertia::render('Profile/Private', [
            'users' => $users->items(),
            'meta' => $users->toArray()
        ]);
    }

    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
