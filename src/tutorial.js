import Tone from "tone";

const synth = new Tone.Synth().toMaster();

const data = [
    { note: "E4", dur: "2n" },
    null,
    [{ note: "E4", dur: "8n" }, { note: "F4", dur: "8n" }],
    [{ note: "G4", dur: "8n" }, { note: "C5", dur: "2n" }],

    null,
    [null, { note: "D5", dur: "8n" }],
    { note: "C5", dur: "2n" },
    null,

    null,
    { note: "B4", dur: "4n" },
    [{ note: "B4", dur: "8n" }, { note: "A4", dur: "8n" }],
    [{ note: "B4", dur: "8n" }, { note: "C5", dur: "2n" }],
];

const seq = new Tone.Sequence((time, { note, dur }) => {
    synth.triggerAttackRelease(note, dur, time);
}, data, "4n").start(0);
seq.loop = false;
Tone.Transport.bpm.value = 150;

document.body.insertAdjacentHTML("afterbegin", '<input type="button" value="play!">');
document.querySelector("[type=button]").addEventListener("click", e => {
    Tone.Transport.start();
});
