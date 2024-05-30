import './App.css';
import TaskAuth from 'taskAuth/TaskAuth';
import TaskEditor from 'taskEditor/TaskEditor';
import TaskList from 'taskList/TaskList';

function App() {
    return (
        <div>
            <TaskAuth />
            <TaskEditor />
            <TaskList />
        </div>
    );
}

export default App;
