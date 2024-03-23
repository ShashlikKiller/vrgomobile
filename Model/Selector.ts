import { Exercise } from "./Exercise";
import { IExirciseSelctorBuilder, ISelector } from "./interfaces/IExerciseSelector";

class Selector<T> implements ISelector<T> {
    Select(array: T[], pathology: string, affectedRegions: string[]): T[] {
        return array.filter(item => {
            if (item instanceof Exercise) {
                let exercise = item as Exercise;
                return exercise.description.indexOf(pathology) !== -1 && affectedRegions.some(region => exercise.description.indexOf(region) !== -1);
            }
            return false;
        });
    }
}

class ExerciseSelectorBuilder implements IExirciseSelctorBuilder {
    private pathology: string[] = [];
    private affectedRegion: string[] = [];

    AddPathology(pathology: string): IExirciseSelctorBuilder {
        this.pathology.push(pathology);
        return this;
    }

    AddAffectedRegion(affectedRegion: string[]): IExirciseSelctorBuilder {
        this.affectedRegion.push(...affectedRegion);
        return this;
    }

    Build(): ISelector<Exercise> {
        return new Selector<Exercise>();
    }
}

// Example usage
let selectorBuilder = new ExerciseSelectorBuilder();
let selector = selectorBuilder.AddPathology("Патология").AddAffectedRegion(["Рука", "Нога"]).Build();
let exercises = [
    new Exercise(1, "Exercise 1 with Патология and Рука", ["Step 1", "Step 2"], "image1.jpg"),
    new Exercise(2, "Exercise 2 with Нога", ["Step 1", "Step 2", "Step 3"], "image2.jpg"),
    new Exercise(3, "Exercise 3 without Патология", ["Step 1"], "image3.jpg")]
let selectedExercises = selector.Select(exercises, "Патология", ["Рука", "Нога"]);
console.log(selectedExercises);
