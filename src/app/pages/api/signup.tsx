import { NextApiRequest, NextApiResponse } from 'next';

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;
        try {
            const response = await fetch('http://localhost:5000/api/create_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {
                res.status(200).json({ message: 'Sign up successful' });
            } else {
                res.status(500).json({ message: 'Sign up failed' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Sign up failed' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default signup;
