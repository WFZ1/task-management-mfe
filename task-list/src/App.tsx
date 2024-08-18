import TasksPage from './routes/tasks';
import { NavigationProvider } from './services/navigation/context';

interface AppProps {
    onNavigate?(path: string): void;
}

function App({ onNavigate }: AppProps) {
    return (
        <NavigationProvider onNavigate={onNavigate}>
            <TasksPage />
        </NavigationProvider>
    );
}

export default App;
