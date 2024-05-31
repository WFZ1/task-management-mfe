import { Task } from '@/types';
import { DBQueryResponse } from '../db/types';
import { db } from '../db';

export const getTasks = async (): Promise<Task[] | null | undefined> => {
    const { data, error }: DBQueryResponse<Task[]> = await db.from('tasks').select();

    if (error) {
        console.error('Error getting tasks: ', error);
        throw error;
    }

    return data;
};

export const completeTask = async (taskId: Task['id'], isCompleted: Task['isCompleted']) => {
    const { error } = await db.from('tasks').update({ isCompleted }).eq('id', taskId);

    if (error) {
        console.error('Error completing task: ', error);
        throw error;
    }
};

export const deleteTask = async (taskId: Task['id']) => {
    const { error } = await db.from('tasks').delete().eq('id', taskId);

    if (error) {
        console.error('Error deleting task: ', error);
        throw error;
    }
};
