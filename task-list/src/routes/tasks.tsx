import { Header } from '@/components/tasks/header';
import { Tasks } from '@/components/tasks/tasks';

export default function TasksPage() {
    return (
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <Header />
            <Tasks />
        </div>
    );
}
