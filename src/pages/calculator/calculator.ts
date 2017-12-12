import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  bmiInfo: string;

  constructor() {}

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.bmiInfo
      this.setBMIMessage();
    }

  }

  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
      this.bmiInfo = "Your weight is less than it ideally should be. See your doctor or health professional and discuss whether you may need to aim at gaining weight. Being underweight may be associated with lack of some vitamins and minerals that can affect important body functions, such as your immune response to infection and fertility or it can lead to a multitude of health issues from heart disease to bone problems. ";

    }

    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Healthy"
      this.bmiInfo = "Your BMI is currently within what is considered a healthy weight range. Being a healthy weight has important benefits, not only on how you feel, but also to help reduce your risk of heart disease, diabetes and a range of other conditions.";
    }

    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
      this.bmiInfo = "Your weight appears to be a bit above the ideal range. You should consider losing a few kilograms. You might like to talk to your doctor about whether you need to set yourself a new target for a healthy weight. ";
    }

    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
      this.bmiInfo = "You currently weigh more than is ideal. This puts your health at risk and is of increasing concern as you get older. It is generally recommended that you take action to reduce your weight and BMI for the sake of a healthier future.";
          }

    }
  }
