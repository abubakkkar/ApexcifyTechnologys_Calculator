 const output = document.getElementById('output');
        let currentInput = '0';

        // Update the display
        function updateDisplay() {
            output.value = currentInput;
        }

        // Handle button clicks
        function handleButtonClick(value) {
            if (currentInput === '0' && value !== '.') {
                currentInput = value;
            } else {
                currentInput += value;
            }
            updateDisplay();
        }

        // Clear input
        function clearInput() {
            currentInput = '0';
            updateDisplay();
        }

        // Backspace
        function backspace() {
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') {
                currentInput = '0';
            }
            updateDisplay();
        }

        // Evaluate expression
        function evaluateExpression() {
            try {
                currentInput = eval(currentInput).toString();
            } catch (e) {
                currentInput = 'Error';
            }
            updateDisplay();
        }

        // Button event listeners
        document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent.trim();
                if (value === 'C') {
                    clearInput();
                } else if (value === '←') {
                    backspace();
                } else if (value === '=') {
                    evaluateExpression();
                } else {
                    handleButtonClick(value);
                }
            });
        });

    