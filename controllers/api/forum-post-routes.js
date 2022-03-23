const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Forum_Post, User, Forum_Comment, Forum_Vote } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts w/o authentication, includes comments
router.get('/', (req, res) => {
    console.log('======================');
    Forum_Post.findAll({
        // attributes: [
        //     'id',
        //     'post_content',
        //     'title',
        //     'created_at',
        //     [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        // ],
        include: [
            {
                model: Forum_Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Forum_Post.findOne({
        where: {
            id: req.params.id
        },
        // attributes: [
        //     'id',
        //     'post_content',
        //     'title',
        //     'created_at',
        //     [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        // ],
        include: [
            {
                model: Forum_Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    // expects post title and post content
    Forum_Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.put('/upvote', withAuth, (req, res) => {
//     // custom static method created in models/Post.js
//     Forum_Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
//         .then(updatedVoteData => res.json(updatedVoteData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

router.put('/:id', withAuth, (req, res) => {
    Forum_Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
