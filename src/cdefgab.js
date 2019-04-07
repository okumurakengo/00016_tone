import Tone from "tone";

const synth = new Tone.Synth().toMaster();

document.body.insertAdjacentHTML("afterbegin", `
    <input type="button" value="ド" id="c">
    <input type="button" value="レ" id="d">
    <input type="button" value="ミ" id="e">
    <input type="button" value="ファ" id="f">
    <input type="button" value="ソ" id="g">
    <input type="button" value="ラ" id="a">
    <input type="button" value="シ" id="b">
    <br>
    <input type="button" value="ド#" id="cs">
`);
c.addEventListener("click", e => synth.triggerAttackRelease("C4", "8n"));
d.addEventListener("click", e => synth.triggerAttackRelease("D4", "8n"));
e.addEventListener("click", e => synth.triggerAttackRelease("E4", "8n"));
f.addEventListener("click", e => synth.triggerAttackRelease("F4", "8n"));
g.addEventListener("click", e => synth.triggerAttackRelease("G4", "8n"));
a.addEventListener("click", e => synth.triggerAttackRelease("A4", "8n"));
b.addEventListener("click", e => synth.triggerAttackRelease("B4", "8n"));
cs.addEventListener("click", e => synth.triggerAttackRelease("C#4", "8n"));
