import React from 'react';
import { useDispatch } from 'react-redux';
import { addReaction } from './postSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
} as const; // 'as const' ensures the key names are literal strings, not general strings

type ReactionType = keyof typeof reactionEmoji; // This provides the correct type for reactions

const ReactionButtons = ({ post }: { post: { id: string; reactions: Record<ReactionType, number> } }) => {
    const dispatch = useDispatch();
    
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        const reactionName = name as ReactionType; // Explicit type assertion
        
        return (
            <button
                key={name}
                type="button"
                onClick={() => {
                    dispatch(addReaction({ postId: post.id, reaction: reactionName }));
                }}
            >
                {emoji} {post.reactions[reactionName]}
            </button>
        );
    });

    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
