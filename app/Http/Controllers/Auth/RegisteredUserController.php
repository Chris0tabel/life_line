<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone_number' => 'required|string|max:7|unique:users,phone_number',
            'd_o_b' => 'required|date|before:today', // Date of birth must be a valid date before today
             'blood_group' => 'required|string|in:A+,A-,B+,B-,AB+,AB-,O+,O-', // Define acceptable blood types
             'gender' => 'required|string|in:male,female',
             'location' => 'required|string|max:255', // Assuming location is a string
            'visibility' => 'required|string|in:public,private', // Assuming visibility is a boolean (true/false)
            //  'user_type' => 'required|integer|in:0,1,2', // Assuming user_type corresponds to roles (0, 1, 2)

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
            'blood_group' => $request->blood_group,
            'd_o_b'=> $request->d_o_b,
            'gender' => $request->gender,
            'location' => $request->location,
            'visibility' => $request->visibility,

        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
