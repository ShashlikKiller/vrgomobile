import { Exercise } from "@models/Exercise";
import { IExerciseSelectorBuilder, ISelector } from "../interfaces/IExerciseSelector";

class Selector implements ISelector<Exercise> {
    private pathology: string;
    private affectedRegions: string[];

    constructor(pathology: string, affectedRegions: string[]) {
        this.pathology = pathology;
        this.affectedRegions = affectedRegions;
    }

    Select(array: Exercise[]): Exercise[] {
        return array.filter(item => {
            if (item instanceof Exercise) {
                let exercise = item as Exercise;
                return exercise.description.indexOf(this.pathology) !== -1 && this.affectedRegions.some(region => exercise.description.indexOf(region) !== -1);
            }
            return false;
        });
    }
}

class ExerciseSelectorBuilder implements IExerciseSelectorBuilder {
    private pathology: string = "";
    private affectedRegion: string[] = [];

    AddPathology(pathology: string): IExerciseSelectorBuilder {
        this.pathology = pathology;
        return this;
    }

    AddAffectedRegion(affectedRegion: string[]): IExerciseSelectorBuilder {
        this.affectedRegion.push(...affectedRegion);
        return this;
    }

    Build(): ISelector<Exercise> {
        return new Selector(this.pathology, this.affectedRegion);
    }
}

// Example usage
let selectorBuilder = new ExerciseSelectorBuilder();
let selector = selectorBuilder.AddPathology("Патология").AddAffectedRegion(["Рука", "Нога"]).Build();
let exercises = [
    new Exercise(1, 12, "Exercise 1 with Патология and Рука", ["Step 1", "Step 2"], "image1.jpg"),
    new Exercise(2, 12, "Exercise 2 with Нога", ["Step 1", "Step 2", "Step 3"], "image2.jpg"),
    new Exercise(3, 12, "Exercise 3 without Патология", ["Step 1"], "image3.jpg")
];
let selectedExercises = selector.Select(exercises);
console.log(selectedExercises);