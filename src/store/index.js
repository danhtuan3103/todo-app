import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PROJECT_LIST, TASKS } from '~/assets/data/socials';

const projectSlice = createSlice({
    name: 'projects',
    initialState: { projects: PROJECT_LIST },
    reducers: {
        addProject: (state, action) => {
            console.log(action.payload);
            state.projects = [action.payload, ...state.projects];
        },
        deleteProject: (state, action) => {
            state.projects = state.projects.filter((obj) => obj.id !== action.payload);
        },
        editProject: (state, action) => {
            console.log(action.payload);
            state.projects = state.projects.map((p) => {
                if (p.id === action.payload.id) {
                    p.title = action.payload.title;
                    p.description = action.payload.description;
                }

                return p;
            });

            console.log(state.projects);
        },
        moveProject: (state, action) => {
            console.log(action);
            state.projects = state.projects.map((p) => {
                if (p.id === action.payload && p.type === 'todo') {
                    return { ...p, type: 'progress' };
                } else if (p.id === action.payload && p.type === 'progress') {
                    return { ...p, type: 'completed' };
                } else return p;
            });
        },
    },
});

const todaySlice = createSlice({
    name: 'projects',
    initialState: { tasks: TASKS },
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload);
            state.tasks = state.tasks.map((p) => {
                if (p.id === action.payload.id) {
                    p.title = action.payload.title;
                    p.description = action.payload.description;
                    p.color = action.payload.color;

                    p.isSample = false;
                }

                return p;
            });

            console.log(state.tasks);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((obj) => obj.id !== action.payload);
        },
        editTask: (state, action) => {},
        moveTask: (state, action) => {
            state.tasks = state.tasks.map((p) => {
                if (p.id === action.payload && p.type === 'todo') {
                    return { ...p, type: 'completed' };
                } else return p;
            });
        },
        addSampleBox: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
            console.log(state.tasks);
        },
    },
});

export const actions = projectSlice.actions;
export const todayActions = todaySlice.actions;
const store = configureStore({
    reducer: {
        projects: projectSlice.reducer,
        today: todaySlice.reducer,
    },
});

export default store;
