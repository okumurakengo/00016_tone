import Tone from "tone";

document.body.insertAdjacentHTML("afterbegin", `
    <input type="button" value="play!">
    <audio controls></audio>
`);
const audio = document.querySelector("audio");
const synth = new Tone.Synth().toMaster();
const actx  = Tone.context;
const dest  = actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);

synth.connect(dest);

const chunks = [];

const notes = "CDEFGAB".split("").map(n=>`${n}4`);
let note = 0;
Tone.Transport.scheduleRepeat(time => {
    if (note === 0) {
        recorder.start();
    }
    if (note > notes.length) {
        synth.triggerRelease(time);
        recorder.stop();
        Tone.Transport.stop();
    } else {
        synth.triggerAttack(notes[note], time);
    }
    note++;
}, "4n");

recorder.ondataavailable = evt => chunks.push(evt.data);
recorder.onstop = evt => {
    let blob = new Blob(chunks, { type: "audio/ogg: codecs=opus" })
    audio.src = URL.createObjectURL(blob);
};

document.querySelector("[type=button]").addEventListener("click", e => {
    Tone.Transport.start();
});
