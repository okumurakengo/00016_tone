import * as Tone from "tone";

var synth: Tone.Synth = new Tone.Synth().toMaster();

document.body.insertAdjacentHTML("afterbegin", '<input type="button" value="play!">');
document.querySelector("[type=button]").addEventListener("click", e => {
    synth.triggerAttackRelease("C4", "8n");
});
