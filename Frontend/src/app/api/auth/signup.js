// pages/api/auth/signup.js
import { dbConnect } from '../../../../utils/dbConnect'; // Import the dbConnect function
import User from '../../../../models/User'; // Ensure you have this User model
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await dbConnect(); // Connect to your MongoDB database

        const { email, password } = req.body;

        try {
            // Check if the user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ success: false, message: 'User already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Create a new user
            const newUser = new User({ email, password: hashedPassword });
            await newUser.save();
            return res.status(201).json({ success: true, message: 'User created successfully' });
        } catch (error) {
            console.error("Signup error:", error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
