import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    id: string;
    title: string;
    content: string;
    reactions: {
        thumbsUp: number;
        wow: number;
        heart: number;
        rocket: number;
        coffee: number;
    };
}

const initialState: Post[] = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action: PayloadAction<Post>) => {
                state.push(action.payload);
            },
            prepare: (title: string, content: string, userId: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    } as Post // Assert the type to Post
                };
            }
        },
        addReaction: (state, action: PayloadAction<{ postId: string; reaction: keyof Post['reactions'] }>) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    }
});

export const selectAllPosts = (state: { posts: Post[] }) => state.posts;

export const { addPost, addReaction } = postSlice.actions;
export default postSlice.reducer;
