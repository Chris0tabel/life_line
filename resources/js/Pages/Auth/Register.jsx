import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        blood_group: '',
        d_o_b: '',
        gender:'',
        location: '',
        phone_number: '', // Changed to phone_number
        visibility: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

         // Print form data to the console
         console.log('Form Data:', data);

        post(route('register'));
    };

    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const locations = ['Banjul', 'Kanifing', 'Brikama', 'Mansa Konko', 'Kerewan', 'Kuntaur', 'Janjangbureh', 'Basse'];
    const visibilityOptions = ['public', 'private'];
    const genders = ['male', 'female'];

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <span className='px-6 text-red-600 text-sm'>Your full name</span>

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="d_o_b" value="Date of Birth" />

                    <TextInput
                        id="d_o_b"
                        name="d_o_b"
                        type="date"
                        value={data.d_o_b}
                        className="mt-1 block w-full"
                        autoComplete="d_o_b"
                        isFocused={true}
                        onChange={(e) => setData('d_o_b', e.target.value)}
                        required
                    />

                    <InputError message={errors.d_o_b} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="gender" value="gender" />

                    <select
                        id="gender"
                        name="gender"
                        value={data.gender}
                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        onChange={(e) => setData('gender', e.target.value)}
                        required
                    >
                        <option value="">Select gender</option>
                        {genders.map((gender) => (
                            <option key={gender} value={gender}>
                                {gender}
                            </option>
                        ))}
                    </select>

                    <InputError message={errors.gender} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4 ">
                    <InputLabel htmlFor="blood_group" value="Blood Group" />

                    <select
                        id="blood_group"
                        name="blood_group"
                        value={data.blood_group}
                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        onChange={(e) => setData('blood_group', e.target.value)}
                        required
                    >
                        <option value="">Select Blood Type</option>
                        {bloodTypes.map((bloodType) => (
                            <option key={bloodType} value={bloodType}>
                                {bloodType}
                            </option>
                        ))}
                    </select>

                    <InputError message={errors.blood_group} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="location" value="Location" />

                    <select
                        id="location"
                        name="location"
                        value={data.location}
                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        onChange={(e) => setData('location', e.target.value)}
                        required
                    >
                        <option value="">Select Location</option>
                        {locations.map((location) => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>

                    <InputError message={errors.location} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="visibility" value="Visibility" />
                    <span className='px-6'>the visibility controllers ....</span>

                    <select
                        id="visibility"
                        name="visibility"
                        value={data.visibility}
                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        onChange={(e) => setData('visibility', e.target.value)}
                        required
                    >
                        <option value="">Select your mode of visibility</option>
                        {visibilityOptions.map((visibility) => (
                            <option key={visibility} value={visibility}>
                                {visibility}
                            </option>
                        ))}
                    </select>

                    <InputError message={errors.visibility} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phone_number" value="Phone Number" />
                    <span className='px-6 text-sm text-red-600'>Your Seven(7) Gambian digits</span>

                    <TextInput
                        id="phone_number"
                        type="text"
                        name="phone_number"
                        value={data.phone_number} // Changed to phone_number
                        className="mt-1 block w-full"
                        autoComplete="tel"
                        onChange={(e) => setData('phone_number', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone_number} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
