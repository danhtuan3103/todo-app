import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PROJECT_LIST, TASKS, SCHEDULE } from '~/assets/data/socials';

const projectSlice = createSlice({
    name: 'projects',
    initialState: { projects: PROJECT_LIST },
    reducers: {
        addProject: (state, action) => {
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

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: { schedule: SCHEDULE },
    reducers: {
        editDay: (state, action) => {
            const data = action.payload.data;
            console.log(data);
            state.schedule = state.schedule.map((s) => {
                if (s.day === data.day) {
                    s.schedules = s.schedules.map((d) => {
                        if (d.id === data.id) {
                            console.log('EDIT');
                            d.name = data.name;
                            d.time = data.time;
                            d.address = data.address;
                            d.professor = data.professor;
                        } else {
                        }
                        return d;
                    });
                }
                return s;
            });
        },
        addDay: (state, action) => {
            const data = action.payload.data;
            console.log(data);
            state.schedule = state.schedule.map((s) => {
                if (s.day === data.day) {
                    s.schedules = [
                        ...s.schedules,
                        {
                            id: data.id,
                            name: data.name,
                            professor: data.professor,
                            time: data.time,
                            address: data.address,
                            color: `#${data.color}66`,
                        },
                    ];
                }
                return s;
            });
        },
    },
});

export const actions = projectSlice.actions;
export const todayActions = todaySlice.actions;
export const scheduleActions = scheduleSlice.actions;
const store = configureStore({
    reducer: {
        projects: projectSlice.reducer,
        today: todaySlice.reducer,
        schedule: scheduleSlice.reducer,
    },
});

export default store;
