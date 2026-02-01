import $ from "jquery";
import "./style.css";
import { ColorPickerTileSize, type IColorPicker } from "./samples/colorPicker/IColorPicker";
import { ColorPicker } from "./samples/colorPicker/ColorPicker";

const $app = $("#app");
$app.html(`
  <div>
    <h1>Hunt the Wumpus</h1>

    Selected Color: <span data-role="selected_color"></span>
    <div>
      <button data-action="open_color_picker">Open Color Picker</button>
    </div>
    <div id="ColorPickerContainer"></div>
    
  </div>
`);

// create a new colorPicker with our ColorPicker implementation
const colorPicker: IColorPicker = new ColorPicker();

// find the div with the id "ColorPickerContainer"
const colorPickerContainer = $('#ColorPickerContainer');

// initialize the color picker, providing it with the container that we want it to draw itself in
colorPicker.init(colorPickerContainer);

// find the colorPickerButton and selectedColorText so that we can do things with them
const $colorPickerButton = $app.find('[data-action="open_color_picker"]');
const $selectedColorText = $app.find('[data-role="selected_color"]');

// try loading the selected color in case we previously saved it. If not, use 'not yet selected'
const savedSelectedColor = localStorage.getItem('selectedColor') ?? 'Not yet selected';

// write the saved selected color to the selected color text ui
$selectedColorText.text(savedSelectedColor);

// tell the color picker button what to do when it is 'clicked'
$colorPickerButton.on('click', async () => {
  // first, hide the show color picker button
  $colorPickerButton.hide();

  // now we tell the color picker to show itself, and we wait (via 'await') for it to return the selection
  const colorResult = await colorPicker.showColorPicker(5, ColorPickerTileSize.LARGE);

  // get the new selected color
  const newSelectedColor = colorResult.selected_color;

  // save the selected color for next time we load the page
  localStorage.setItem('selectedColor', newSelectedColor)

  // now we have the selected color, so set it in our selectedColorText
  $selectedColorText.text(newSelectedColor);

  // show the color picker button again
  $colorPickerButton.show();
});

