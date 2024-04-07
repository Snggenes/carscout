import { useUser } from "@/contexts/userContext";

export default function Favorites() {
    const { user } = useUser();
    return (
        <div>
        <h1>Favorites of {user?.username}</h1>
        </div>
    );
}