// Define the pin numbers
const int pirPin = 33;      // GPIO pin for the PIR sensor
const int buzzerPin = 25;   // GPIO pin for the buzzer
const int ledPin = 26;      // GPIO pin for the LED
const int buttonPin = 27;   // GPIO pin for the push button

// Variables to hold the current and previous state of the PIR sensor
int pirState = LOW;
int lastPirState = LOW;

// Variable to hold the button state
int buttonState = 0;
int lastButtonState = HIGH; // Assume the button is not pressed initially

void setup() {
  // Initialize the PIR sensor pin as input
  pinMode(pirPin, INPUT);

  // Initialize the buzzer and LED pins as output
  pinMode(buzzerPin, OUTPUT);
  pinMode(ledPin, OUTPUT);

  // Initialize the button pin as input with an internal pull-up resistor
  pinMode(buttonPin, INPUT_PULLUP);

  // Start with the buzzer and LED turned off
  digitalWrite(buzzerPin, LOW);
  digitalWrite(ledPin, LOW);
}

void loop() {
  // Read the current state of the PIR sensor
  pirState = digitalRead(pirPin);

  // Read the current state of the button
  buttonState = digitalRead(buttonPin);

  // Check if the PIR sensor detects motion
  if (pirState == HIGH) {
    // Turn on the buzzer and LED if motion is detected
    digitalWrite(buzzerPin, HIGH);
    digitalWrite(ledPin, HIGH);
  } else {
    // Turn off the buzzer and LED if no motion is detected
    digitalWrite(buzzerPin, LOW);
    digitalWrite(ledPin, LOW);
  }

  // Check if the button state has changed
  if (buttonState == LOW && lastButtonState == HIGH) {
    // Turn off the buzzer and LED when the button is pressed
    digitalWrite(buzzerPin, LOW);
    digitalWrite(ledPin, LOW);

    // Add a small delay to debounce the button
    delay(50);
  }

  // Save the current button state as the last state for the next loop
  lastButtonState = buttonState;
}
