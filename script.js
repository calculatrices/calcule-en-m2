import config from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const shapeSelect = document.getElementById('shape');
    const rectangleInputs = document.getElementById('rectangle-inputs');
    const circleInputs = document.getElementById('circle-inputs');
    const triangleInputs = document.getElementById('triangle-inputs');
    const calculateButton = document.getElementById('calculate-button');
    const resultDiv = document.getElementById('result');
    const areaResult = document.getElementById('area-result');

    function updateInputVisibility() {
        rectangleInputs.style.display = 'none';
        circleInputs.style.display = 'none';
        triangleInputs.style.display = 'none';

        const selectedShape = shapeSelect.value;
        if (selectedShape === 'rectangle') {
            rectangleInputs.style.display = 'block';
        } else if (selectedShape === 'circle') {
            circleInputs.style.display = 'block';
        } else if (selectedShape === 'triangle') {
            triangleInputs.style.display = 'block';
        }
    }

    updateInputVisibility(); // Initial visibility

    shapeSelect.addEventListener('change', updateInputVisibility);

    calculateButton.addEventListener('click', () => {
        const selectedShape = shapeSelect.value;
        let area = 0;

        if (selectedShape === 'rectangle') {
            const width = parseFloat(document.getElementById('rectangle-width').value);
            const length = parseFloat(document.getElementById('rectangle-length').value);

            if (isNaN(width) || isNaN(length)) {
                areaResult.textContent = config.errorMessage;
                resultDiv.style.display = 'block';
                return;
            }

            area = width * length;
        } else if (selectedShape === 'circle') {
            const radius = parseFloat(document.getElementById('circle-radius').value);

            if (isNaN(radius)) {
                areaResult.textContent = config.errorMessage;
                resultDiv.style.display = 'block';
                return;
            }

            area = Math.PI * radius * radius;
        } else if (selectedShape === 'triangle') {
            const base = parseFloat(document.getElementById('triangle-base').value);
            const height = parseFloat(document.getElementById('triangle-height').value);

            if (isNaN(base) || isNaN(height)) {
                areaResult.textContent = config.errorMessage;
                resultDiv.style.display = 'block';
                return;
            }

            area = 0.5 * base * height;
        }

        areaResult.textContent = `La surface est de ${area.toFixed(2)} m²`;
        resultDiv.style.display = 'block';
    });
});