import { loginAdmin } from "@/lib/auth";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const token = await loginAdmin(email, password);
        return Response.json({ token });

    } catch (error) {
        return Response.json(
            { error: error.message, },
        {status: 401}
    );
    }
}