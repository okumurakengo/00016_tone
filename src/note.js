import Tone from "tone";

var synth = new Tone.Synth().toMaster();

document.body.insertAdjacentHTML("afterbegin", `
    <input type="button" value="全音符" id="note">
    <input type="button" value="2分音符" id="halfNote">
    <input type="button" value="4分音符" id="quarterNote">
    <input type="button" value="8分音符" id="eighthNote">
    <input type="button" value="16分音符" id="sixteen">
`);
note.addEventListener("click", e => synth.triggerAttackRelease("C4", "1n"));
halfNote.addEventListener("click", e => synth.triggerAttackRelease("C4", "2n"));
quarterNote.addEventListener("click", e => synth.triggerAttackRelease("C4", "4n"));
eighthNote.addEventListener("click", e => synth.triggerAttackRelease("C4", "8n"));
sixteen.addEventListener("click", e => synth.triggerAttackRelease("C4", "16n"));
