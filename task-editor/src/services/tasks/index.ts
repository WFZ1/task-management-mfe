import { Task } from '@/types';
import { DBQueryResponse } from '../db/types';
import { db } from '../db';

export const getTask = async (taskId: Task['id']): Promise<Task | null | undefined> => {
    const { data, error }: DBQueryResponse<Task> = await db.from('tasks').select().eq('id', taskId).single();

    if (error) {
        throw error;
    }

    return data;
};

export const createTask = async (task: Omit<Task, 'id' | 'isCompleted'>) => {
    const { error } = await db.from('tasks').insert(task);

    if (error) {
        throw error;
    }
};

export const updateTask = async (taskId: Task['id'], taskData: Omit<Task, 'id' | 'isCompleted'>) => {
    const { error } = await db.from('tasks').update(taskData).eq('id', taskId);

    if (error) {
        throw error;
    }
};
