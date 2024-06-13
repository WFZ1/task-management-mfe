import { Header } from '@/components/tasks/header';
import { Tasks } from '@/components/tasks/tasks';

export default function TasksPage() {
    // TODO: investigate why 'hidden' class for div below works differently from host app
    return (
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <Header />
            <Tasks />
        </div>
    );
}
