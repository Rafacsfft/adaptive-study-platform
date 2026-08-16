"use client";

import { useEffect, useState } from "react";

const quiz = [
  { subject: "Physics", q: "A body moves at 12 m/s for 5 seconds. How far does it travel?", options: ["17 m", "60 m", "120 m", "2.4 m"], answer: 1, why: "Distance = velocity × time: 12 × 5 = 60 m." },
  { subject: "Mathematics", q: "If 2ˣ = 32, what is x?", options: ["4", "5", "16", "30"], answer: 1, why: "32 is 2 raised to the fifth power." },
  { subject: "Chemistry", q: "Which particle determines an element's atomic number?", options: ["Neutron", "Electron", "Proton", "Ion"], answer: 2, why: "Atomic number is defined by the number of protons." },
];

export default function Home() {
  const [seconds, setSeconds] = useState(1500);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(2);
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setSeconds((value) => {
      if (value <= 1) { setRunning(false); setSessions((n) => n + 1); return 1500; }
      return value - 1;
    }), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const question = quiz[current];
  const choose = (index: number) => {
    if (picked !== null) return;
    setPicked(index);
    if (index === question.answer) setScore((n) => n + 1);
  };
  const next = () => { setCurrent((n) => (n + 1) % quiz.length); setPicked(null); };

  return <main>
    <nav className="nav shell"><a className="brand" href="#top"><span>Æ</span> AdaptEd</a><div className="links"><a href="#workspace">Workspace</a><a href="#practice">Practice</a><a href="#methods">Methods</a></div><a className="button small" href="#workspace">Start a session</a></nav>

    <section className="hero shell" id="top">
      <div><p className="eyebrow">Built by a student, for students</p><h1>Study with <em>intention.</em><br/>Improve with evidence.</h1><p className="lead">A focused workspace that turns study time into a repeatable cycle: plan, concentrate, practice, and reflect.</p><div className="actions"><a className="button" href="#workspace">Open your workspace ↗</a><a className="textlink" href="#story">Why this exists ↓</a></div><div className="proof"><div><strong>25 min</strong><span>focused sessions</span></div><div><strong>3</strong><span>learning methods</span></div><div><strong>100%</strong><span>local data</span></div></div></div>
      <div className="visual"><div className="orb"><strong>72%</strong><span>weekly goal</span></div><div className="floating top"><i/> In focus <strong>18:42</strong></div><div className="floating bottom"><span>Today</span><strong>2 sessions</strong><small>+1 from yesterday</small></div></div>
    </section>

    <section className="workspace section shell" id="workspace"><div className="intro"><p className="eyebrow">Your workspace</p><h2>One goal. One session.<br/>No noise.</h2><p>The MVP keeps the routine intentionally simple. Your activity stays on this device.</p></div><div className="dashboard">
      <article className="timer"><div className="paneltop"><span>Focus session</span><span className="live">● {running ? "LIVE" : "READY"}</span></div><strong>{time}</strong><p>Work on one defined task until the timer ends.</p><div className="timeractions"><button className="button" onClick={() => setRunning(!running)}>{running ? "Pause" : "Start focus"}</button><button className="reset" aria-label="Reset timer" onClick={() => {setRunning(false);setSeconds(1500)}}>↻</button></div></article>
      <div className="stats"><article><span>Today's progress</span><strong>{sessions}<small> / 4</small></strong><div className="bar"><i style={{width:`${Math.min(sessions*25,100)}%`}}/></div><small>sessions completed</small></article><article><span>Focus minutes</span><strong>{sessions*25}</strong><small>minutes invested today</small></article><article className="wide"><span>Weekly rhythm</span><div className="week">{[38,70,52,88,64,sessions*25,15].map((h,i)=><i key={i} style={{height:`${h}%`}}><b>{"MTWTFSS"[i]}</b></i>)}</div></article></div>
    </div></section>

    <section className="practice section" id="practice"><div className="shell practicegrid"><div className="intro light"><p className="eyebrow">Active practice</p><h2>Knowing feels good.<br/>Retrieving works better.</h2><p>Short questions make understanding visible and turn mistakes into the next study target.</p><div className="score"><span>Session score</span><strong>{score}/{quiz.length}</strong></div></div><article className="question"><div className="meta"><span>{question.subject}</span><span>{current+1} of {quiz.length}</span></div><h3>{question.q}</h3><div className="options">{question.options.map((option,index)=>{const state=picked===null?"":index===question.answer?"correct":picked===index?"wrong":"muted";return <button className={state} key={option} onClick={()=>choose(index)}><span>{String.fromCharCode(65+index)}</span>{option}</button>})}</div>{picked!==null&&<div className="feedback"><strong>{picked===question.answer?"Correct. ":"Not yet. "}</strong>{question.why}<button onClick={next}>Next →</button></div>}</article></div></section>

    <section className="methods section shell" id="methods"><div className="intro centered"><p className="eyebrow">Evidence into action</p><h2>Methods that earn their place.</h2><p>No productivity theatre. Just practical techniques students can apply in the next study session.</p></div><div className="methodgrid">{[["01","Active recall","Close the material and retrieve the answer from memory before checking it."],["02","Spaced practice","Review at increasing intervals instead of concentrating practice in one day."],["03","Deliberate focus","Use a defined task and a short timer to protect attention."]].map(m=><article key={m[1]}><span>{m[0]}</span><h3>{m[1]}</h3><p>{m[2]}</p><a href="#workspace">Try in workspace →</a></article>)}</div></section>

    <section className="story section shell" id="story"><div><p className="eyebrow">The project</p><h2>Created from a real student problem.</h2></div><div><p>Study tools often add more dashboards, notifications, and pressure. AdaptEd began with a smaller question: <strong>what is the minimum structure a student needs to study consistently and learn from each session?</strong></p><p>This public MVP is the first experiment. It combines focus, active recall, and reflection while keeping personal data in the browser.</p><a className="textlink" href="https://github.com/Rafacsfft/adaptive-study-platform">Explore the open-source project ↗</a></div></section>
    <footer className="shell"><a className="brand" href="#top"><span>Æ</span> AdaptEd</a><p>An open student project · MVP 0.1</p><a href="https://github.com/Rafacsfft">GitHub ↗</a></footer>
  </main>;
}
