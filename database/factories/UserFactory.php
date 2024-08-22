<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        //    'name' => fake()->name(),
        //    'email' => fake()->unique()->safeEmail(),
        //    'email_verified_at' => now(),
        //    'phone_number' => $this->faker->unique()->numerify('220#######'),
        //    'password' => static::$password ??= Hash::make('password'),
        //    'user_type' => fake() ->randomElement(['0','1','2']),
        //    'remember_token' => Str::random(10),
           'name' => fake()->name(),
           'email' => fake()->unique()->safeEmail(),
           'email_verified_at' => now(),
           'phone_number' => $this->faker->unique()->numerify('#######'),
           'password' => static::$password ??= Hash::make('password'),
          'blood_group' => fake() ->randomElement(['A+','B+','AB+','O+','A-','B-','AB-','O-']),
            'd_o_b' => fake()->date('Y-m-d'),
            'gender' => fake() ->randomElement(['Male','Female']),
           'location' => fake() ->randomElement(['Abuko','Bakau','Banjul','Banjulunding','Bansang', 'Basse Santa Su','Bijilo','Brufut','Bundung',
           'Busumbala','Dippa Kunda','Farafenni','Farato (West Coast)', 'Gimara Bakadaji','Gunjur',
           'Janjanbureh (Georgetown)','Jufureh',' Kalagi',' Kanilai',
          'Kerewan','Kololi','Kotu','Kuntaur','Lamin (North Bank Division)','Lamin (Western Division)','Latri Kunda German','Latri Kunda Sabiji',
          'Manjai Kunda','Mansa Konko','Nema Kunku','Serekunda','Soma','Sukuta','Tabokoto','Tallinding', 'Tanji','Yundum']),
            'visibility'=> fake() ->randomElement(['private','public']),
            'user_type' => fake() ->randomElement(['0','1','2']),
           'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
