import { useRouter } from 'next/router';
import Image from 'next/image';
import upvote from '../public/upvote-icon.png';
import downvote from '../public/downvote-icon.png';
import styles from '../styles/Film.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import DetailBox from '../components/detailBox';

export default function Film ({ film }) {

    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const [randBackImg, setRandBackImg] = useState(0);
    const [trivia, setTrivia] = useState('');
    const [paragraph, setParagraph] = useState([]);

    const [displayError, setDisplayError] = useState(false);

    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }
    
    useEffect(() => {
        try {
            let num = Math.floor(Math.random() * film[0].img_bank.length - 0);
            let trivNum = Math.floor(Math.random() * film[0].trivia.length - 0);

            setRandBackImg(film[0].img_bank[num])
            setTrivia(film[0].trivia[trivNum])
            setParagraph(film[0].review_text.split('\n'));
        } catch (error) {
            console.log(error)
        }
    }, [])


    const tagComment = (comId, type) => {
        fetch(`http://localhost:4000/films/${film[0]._id}/${comId}`, {
            method: 'POST',
            body: JSON.stringify({ commentId: comId, type: type}),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    console.log('Vote successful')
                    window.location.reload(false);
                }
            })
            .catch(err => console.log(err));
    }

    const submitComment = () => {
        console.log(commentText)
        fetch(`http://localhost:4000/films/${film[0]._id}/${film[0]._id}/addComment`, {
            method: 'POST',
            body: JSON.stringify(
                {   name: name,
                    commentText: commentText }
                ),
            headers: { 'Content-Type': 'application/json' }
        })
            .then (response => {
                if (response.status === 201) {
                    // Reloading page upon successful entry of comment to reflect new comment on page
                    window.location.reload(false);
                }
            })
            .catch (err => {
                console.log(err);
                alert('Unable to post comment, please check connection to server.')
            });
    }

    return (
        <div className = {styles.filmContainer}
            style = {{backgroundImage: `url(${randBackImg})`}}>

                <Link href = '/'>
                    <p className = {styles.backBtn}>{`< BACK`}</p>
                </Link>


                <h2 className = {styles.filmTitle}>{film[0].title}</h2>

                <div className = {styles.iFrameContainer}>
                <iframe src = {film[0].trailer + `?&amp;rel=0&amp;autoplay=1&amp;controls=1&amp;modestbranding=1&amp;iv_load_policy=3`}
                        allowFullScreen = 'true' title = 'video' frameborder = '0' className = {styles.trailerWrapper} allow = 'autoplay; encrypted-media' />
                </div>

                <div className = {styles.detBarWrapper}>
                    <div className = {styles.yearWrap}>
                        <h1 className = {styles.yearText}>{film[0].year}</h1>
                    </div>
                    <div className = {styles.directorWrap}>
                        <h1 className = {styles.directorText}>
                            <span className = {styles.directedBy}>DIRECTED BY:</span>
                            {film[0].director}
                        </h1>
                    </div>
                    <div className = {styles.runtimeWrap}>
                        <h4 className = {styles.runtimeText}>RUNTIME</h4>
                        <h2 className = {styles.runtimeValue}>{film[0].runtime}</h2>
                    </div>
                </div>

                <div className = {styles.blurbWrapper}>
                    <h3 className = {styles.blurbTitle}>BLURB</h3>
                    <p className = {styles.blueText}>{ film[0].blurb }</p>
                </div>

                <div className = {styles.detailsWrapper}>

                    <DetailBox title = "GENRES"
                        entry = {film[0].genre.map(genre => (<>{genre}<br/></>))} />

                    <DetailBox title = "WRITER(S)"
                        entry = {film[0].writers.map(writer => (<>{writer}<br/></>))} />

                    <DetailBox title = "CINEMATOGRAPHY"
                        entry = {film[0].cinematography.map(artist => (<>{artist}<br/></>))} />

                    <DetailBox title = "SOUNDTRACK"
                        entry = {film[0].soundtrack.map(artist => (<>{artist}<br/></>))} />

                    <DetailBox title = "CATEGORIES"
                        entry = {film[0].special_category.map(category => (<>{ category }<br/></>))} />
                </div>

                <div className = {styles.actor_scoreWrapper}>
                        
                        <div className = {styles.not_actWrap}>
                            <h3 className = {styles.not_actTitle}>NOTABLE ACTORS</h3>
                            <p className = {styles.not_actEntries}>{ film[0].notable_actors.map(actor => (<>{actor}<br/></>))}</p>
                        </div>

                        <div className = {styles.review_scoreWrap}>
                            <h1 className = {styles.review_scoreText}>{ film[0].review_score } / 10</h1>
                        </div>

                    </div>

                    <div className = {styles.triviaWrapper}>
                        <h3 className = {styles.triviaTitle}>RANDOM TRIVIA !</h3>
                        <p className = {styles.triviaText}>{ trivia }</p>
                    </div>

                    <div className = {styles.reviewWrapper}>
                        <h2 className = {styles.reviewHeadline}>{ film[0].headline }</h2>
                        <p className = {styles.reviewText}>
                            {
                                paragraph.map(item => (<p>{item}<br/></p>))
                            }
                        </p>
                    </div>

                    <div className = {styles.commentsContainer}>
                        <h3 className = {styles.commentHeader}>What are your thoughts on this movie?</h3>

                        <div className = {styles.commentInput}>
                            <textarea className = {styles.commentTextInput}
                                placeholder = '* Enter a comment !'
                                onChange = { (e) => setCommentText(e.target.value)} />

                            <div className = {styles.rightBar}>
                                <input type = 'text' placeholder = '* name' className = {styles.commentNameInput}
                                    onChange = {(e) => setName(e.target.value)} />
                                
                                <input type = 'button'
                                    className = {styles.commentPostBtn}
                                    onClick = { () => submitComment()}
                                    value = 'POST' />
                            </div>
                        </div>

                        <div className = {styles.displayWrapper}>
                            <p className = {styles.displayText}
                                style = {{color: displayError ? 'red' : 'lightgreen'}}>
                                    Please don't abuse the comment section, I really don't want to have to come down
                                    there and start deleting shit, I'm just too lazy.
                            </p>
                        </div>
                    </div>

                    <div className = {styles.commentListContainer}>
                        {
                            film[0].comments.map(comment => {
                                return (
                                    <div key = {comment._id} className = {styles.individualCommentWrap}>
                                        <div className = {styles.leftPortion}>
                                            <p className = {styles.commentText}>{comment.comment_text}</p>
                                            <div className = {styles.voteBar}>
                                                <div className = {styles.voteContainer}>
                                                    <Image
                                                        src = {upvote}
                                                        alt = 'upvote icon'
                                                        width = '20px'
                                                        height = '20px'
                                                        className = {styles.voteImg} />
                                                    <p className = {styles.tally} id = {styles.upvoteTally}>{comment.upvotes}</p>
                                                </div>

                                                <div className = {styles.voteContainer}>
                                                    <Image
                                                        src = {downvote}
                                                        alt = 'downvote icon'
                                                        width = '20px'
                                                        height = '20px'
                                                        className = {styles.voteImg} />
                                                    <p className = {styles.tally} id = {styles.downvoteTally}>{comment.downvotes}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className = {styles.rightPortion}>
                                            <h4 className = {styles.commentName}>{comment.name}</h4>
                                            <h5 className = {styles.commentTimestamp}>{new Date(comment.timestamp).toLocaleString()}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
        </div>
    )
}

export async function getStaticPaths () {
    return {
        paths: [{ params: { filmId: '6175d7669edca97893d924c1' }}],
        fallback: true,
    }
}

export async function getStaticProps ( context ) {
    const { params } = context;
    console.log(`Regenerating film for page ${params.filmId}`)
    const response = await fetch (`http://localhost:4000/films/${params.filmId}`)
    const data = await response.json();

    if (!data[0]) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            film: data,
        },
        revalidate: 10,
    }
}