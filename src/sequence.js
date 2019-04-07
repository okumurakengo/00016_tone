import Tone from "tone";

var synth = new Tone.Synth().toMaster();
var seq = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, "4n", time);
}, ["C4", "E4", "G4", "B4", "D5"], "4n").start(0);
seq.loop = false;

document.body.insertAdjacentHTML("afterbegin", '<input type="button" value="play!">');
document.querySelector("[type=button]").addEventListener("click", e => {
    Tone.Transport.start();
});
