namespace TaskManagerButtons {

    export class NewCardTask {
        private containerBoxTask : HTMLDivElement | null;
    
        constructor() {
            this.containerBoxTask = document.querySelector(".container_box_tasks") as HTMLDivElement | null;
            
        }
        get ContainerBoxTask():HTMLDivElement | null{
            return this.ContainerBoxTask
        }
    
        static createNewTaskBox(): HTMLDivElement {
            let boxTaskChildren = document.createElement("div");
            boxTaskChildren.setAttribute("class", "task_box");
            boxTaskChildren.setAttribute("role", "form");
            boxTaskChildren.setAttribute("aria-labelledby", "task-form");
            
            NewCardTask.applyTaskBoxStyles(boxTaskChildren);

            boxTaskChildren.innerHTML = `
                <label for="task_title">Título da tarefa:</label>
                <input type="text" class="task_title" placeholder="Título da tarefa" required>
                <label for="task_description">Descrição da tarefa:</label>
                <textarea class="task_description" placeholder="Descreva aqui sua tarefa"></textarea>
    
                <fieldset class="task_priority" aria-labelledby="priority-label">
                    <legend id="priority-label">Prioridade</legend>
                    <label for="priority_low">
                        <input type="radio" class="priority" id="priority_low" name="priority" value="Baixa"> Baixa
                    </label>
                    <label for="priority_medium">
                        <input type="radio" class="priority" id="priority_medium" name="priority" value="Média"> Média
                    </label>
                    <label for="priority_high">
                        <input type="radio" class="priority" id="priority_high" name="priority" value="Alta"> Alta
                    </label>
                </fieldset>
    
                <div class="task_date">
                    <p>Tarefa inicializada em: <span class="current-date">--</span></p>
                </div>
    
                <div class="task_label">
                    <label for="task_label">Categoria:</label>
                    <select id="task_label" name="labels" aria-label="Escolha uma categoria">
                        <option value="Trabalho">Trabalho</option>
                        <option value="Pessoal">Pessoal</option>
                        <option value="Compromissos">Compromissos</option>
                        <option value="Estudos">Estudos</option>
                    </select>
                </div>
    
                <div class="handle_task">
                    <button class="handle_task_button" aria-label="Editar Tarefa" name="editar">Editar Tarefa</button>
                    <button class="handle_task_button" aria-label="Finalizar Tarefa" name="finalizar">Finalizar Tarefa</button>
                </div>
            `;
            return boxTaskChildren;
        }
        static applyTaskBoxStyles(taskBox: HTMLDivElement): void {
            const styles = {
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
            };

            for (const property in styles) {
                if (styles.hasOwnProperty(property)) {
                    taskBox.style[property as any] = styles[property];
                }
            }
        }
        get BoxTaskChildren():HTMLDivElement{
            return NewCardTask.createNewTaskBox();
        }
    }

    export class DeleteNewTask {
        private deleteTaskButton: HTMLButtonElement | null;

        constructor() {
            this.deleteTaskButton = document.getElementById("delete_task") as HTMLButtonElement | null;
        }

        deleteBoxTaskChild(taskBox: HTMLDivElement): void {
            const parentElement = document.querySelector(".container_box_tasks") as HTMLDivElement | null;
            if (parentElement && taskBox) {
                parentElement.removeChild(taskBox);
            } else {
                console.error("Não foi possível encontrar o pai ou o filho.");
            }
        }
        setupDeleteButtons(): void {
            const deleteButtons = document.querySelectorAll(".handle_task_button[name='excluir']");
            deleteButtons.forEach(button => {
                button.addEventListener("click", (event) => {
                    const taskBox = (event.target as HTMLElement).closest('.task_box');
                    if (taskBox) {
                        this.deleteBoxTaskChild(taskBox);
                    }
                });
            });
        }
    }

    export class ShowAllTasks {
        private showTasksCreatedButton: HTMLButtonElement | null;

        constructor() {
            this.showTasksCreatedButton = document.getElementById("show_registered_tasks") as HTMLButtonElement | null;
        }
    }

    export class FilterTask {
        private inputSearchTask: HTMLInputElement | null;

        constructor() {
            this.inputSearchTask = document.getElementById("task_search") as HTMLInputElement | null;
        }
    }
}

namespace CreateTaskCard {
    export class TaskTitle {
        private inputTaskTitle: HTMLInputElement | null;

        constructor() {
            this.inputTaskTitle = document.querySelector(".task_title") as HTMLInputElement | null;
        }
        get InputTaskTitle(): HTMLInputElement | null {
            return this.inputTaskTitle;
        }
        setInputTaskTitleProperty(property: string, value: any): HTMLInputElement | null {
            if (this.inputTaskTitle) {
                this.inputTaskTitle.setAttribute(property, value);
                this.InputTaskTitle?.classList.add("cursor-pointer");
            }
            return this.inputTaskTitle;
        }
    }

    export class TaskDescription {
        private inputTaskDescription: HTMLTextAreaElement | null;

        constructor() {
            this.inputTaskDescription = document.querySelector(".task_description") as HTMLTextAreaElement | null;
        }

        get InputTaskDescription(): HTMLTextAreaElement | null {
            return this.inputTaskDescription;
        }

        setInputTaskDescriptionProperty(property: string, value: any): HTMLTextAreaElement | null {
            if (this.inputTaskDescription) {
                this.inputTaskDescription.setAttribute(property, value);
                this.inputTaskDescription?.classList.add("cursor-pointer");
            }
            return this.inputTaskDescription;
        }
    }

    export class TaskPriority {
        private listInputRadioElements: HTMLInputElement[];
        private divBoxTextCard: HTMLDivElement | null;

        constructor() {
            this.listInputRadioElements = [...document.querySelectorAll<HTMLInputElement>(".priority")];
            this.divBoxTextCard = document.querySelector(".box_task") as HTMLDivElement | null;

            this.listInputRadioElements.forEach((element) => {
                element.addEventListener("click", (evt) => {
                    const target = evt.target as HTMLInputElement;

                    if (this.divBoxTextCard) {
                        if (target.id === "priority_high") {
                            this.divBoxTextCard.style.backgroundColor = "#ff4c4c";
                        } else if (target.id === "priority_medium") {
                            this.divBoxTextCard.style.backgroundColor = "#ffa500";
                        } else if (target.id === "priority_low") {
                            this.divBoxTextCard.style.backgroundColor = "#3cb371";
                        } else {
                            this.divBoxTextCard.style.backgroundColor = "#fff";
                        }
                    }
                });
            });
        }

        setInputsTaskPriorities(property: string, value: any): HTMLInputElement[] {
            return this.listInputRadioElements.map((radio) => {
                radio.setAttribute(property, value);
                radio.classList.add("cursor-pointer");
                return radio;
            });
        }
    }

    export class GetTaskDate {
        private currentDate: string;
        private spanFormatCurrentDate: HTMLSpanElement | null;

        constructor() {
            this.spanFormatCurrentDate = document.querySelector(".current-date") as HTMLSpanElement | null;
            this.currentDate = "";
            if (this.spanFormatCurrentDate) {
                this.spanFormatCurrentDate.innerHTML = this.currentSystemDate;
            }
        }

        get currentSystemDate(): string {
            let ObjDate = new Date();
            const fullDate = [
                ObjDate.getDate().toString().padStart(2, "0"),
                (ObjDate.getMonth() + 1).toString().padStart(2, "0"),
                ObjDate.getFullYear().toString(),
            ];
            this.currentDate = fullDate.join(" / ");
            return this.currentDate;
        }
    }

    export class TaskLabelCategory {
        private selectElement: HTMLSelectElement;

        constructor() {
            const element = document.getElementById("task_label") as HTMLSelectElement | null;
            if (!element) {
                throw new Error(`Elemento <select> não foi encontrado.`);
            }
            this.selectElement = element;
        }

        get SelectElementOption(): HTMLSelectElement {
            return this.selectElement;
        }
    }

    export class ManagerCurrentTask {
        private buttonManagerCurrentTask: HTMLButtonElement[];

        constructor() {
            this.buttonManagerCurrentTask = [...document.querySelectorAll<HTMLButtonElement>(".handle_task_button")];
            this.buttonManagerCurrentTask.forEach((e) => {
                e.addEventListener("click", (evt) => {
                    const target = evt.target as HTMLButtonElement;
                    if (target.name === "finalizar") {
                        toggleDisabled(true);
                    } else if (target.name === "editar") {
                        toggleDisabled(false);
                    }
                });
            });
        }
    }
}

function toggleDisabled(state: boolean): void {
    const taskTitle = document.querySelector(".task_title") as HTMLInputElement | null;
    const taskDescription = document.querySelector(".task_description") as HTMLTextAreaElement | null;
    const inputsRadios = [...document.querySelectorAll<HTMLInputElement>(".priority")];
    const selectCategory = document.getElementById("task_label") as HTMLSelectElement | null;

    if (taskTitle) taskTitle.disabled = state;
    if (taskDescription) taskDescription.disabled = state;
    inputsRadios.forEach((radio) => {
        radio.disabled = state;
    });
    if (selectCategory) selectCategory.disabled = state;
}

document.addEventListener("DOMContentLoaded", () => {
    new TaskManagerButtons.DeleteNewTask().deleteBoxTaskChild();
    new TaskManagerButtons.ShowAllTasks();
    new TaskManagerButtons.FilterTask();
    new CreateTaskCard.TaskTitle();
    new CreateTaskCard.TaskDescription();
    new CreateTaskCard.TaskPriority();
    new CreateTaskCard.GetTaskDate();
    new CreateTaskCard.TaskLabelCategory();
    new CreateTaskCard.ManagerCurrentTask();
    
    const makeTaskButton = document.getElementById("make_task") as HTMLButtonElement | null;
    makeTaskButton?.addEventListener("click", () => {
        const newTaskBox = TaskManagerButtons.NewCardTask.createNewTaskBox();
        const container = document.querySelector(".container_box_tasks") as HTMLDivElement;
        container?.appendChild(newTaskBox);
        new TaskManagerButtons.DeleteNewTask().setupDeleteButtons();
    });
})
