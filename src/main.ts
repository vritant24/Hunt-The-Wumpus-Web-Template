import $ from "jquery";
import "./style.css";
import type ISampleObject from "./interfaces/ISampleObject";
import SampleObject from "./implementations/SampleObject";

const sampleObject: ISampleObject = new SampleObject

const result = sampleObject.add(2, 2);

$("#app").html(`
  <div>
    <h1>Vite + TypeScript + jQuery</h1>
    <p>Edit <code>src/main.ts</code> and save.</p>
    2 + 2 = <span id="result"/>!
  </div>
`);

$("#result").html(result.toString());