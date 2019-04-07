import Tone from "tone";

var synth = new Tone.Synth().toMaster();

const notes = [
    "C4", "E4", "G4",
    "C5", "E5", "G5",
];
let index = 0;

Tone.Transport.scheduleRepeat(time => {
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, "8n", time);
    index++;
}, "8n");

document.body.insertAdjacentHTML("afterbegin", '<input type="button" value="play!">');
document.querySelector("[type=button]").addEventListener("click", e => {
    Tone.Transport.start();

    setTimeout(() => {
        Tone.Transport.stop();
    }, 5000);
});
