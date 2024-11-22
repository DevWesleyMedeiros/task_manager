var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TaskManagerButtons;
(function (TaskManagerButtons) {
    var NewCardTask = /** @class */ (function () {
        function NewCardTask() {
            this.containerBoxTask = document.querySelector(".container_box_tasks");
        }
        Object.defineProperty(NewCardTask.prototype, "ContainerBoxTask", {
            get: function () {
                return this.ContainerBoxTask;
            },
            enumerable: false,
            configurable: true
        });
        NewCardTask.createNewTaskBox = function () {
            var boxTaskChildren = document.createElement("div");
            boxTaskChildren.setAttribute("class", "task_box");
            boxTaskChildren.setAttribute("role", "form");
            boxTaskChildren.setAttribute("aria-labelledby", "task-form");
            NewCardTask.applyTaskBoxStyles(boxTaskChildren);
            boxTaskChildren.innerHTML = "\n                <label for=\"task_title\">T\u00EDtulo da tarefa:</label>\n                <input type=\"text\" class=\"task_title\" placeholder=\"T\u00EDtulo da tarefa\" required>\n                <label for=\"task_description\">Descri\u00E7\u00E3o da tarefa:</label>\n                <textarea class=\"task_description\" placeholder=\"Descreva aqui sua tarefa\"></textarea>\n    \n                <fieldset class=\"task_priority\" aria-labelledby=\"priority-label\">\n                    <legend id=\"priority-label\">Prioridade</legend>\n                    <label for=\"priority_low\">\n                        <input type=\"radio\" class=\"priority\" id=\"priority_low\" name=\"priority\" value=\"Baixa\"> Baixa\n                    </label>\n                    <label for=\"priority_medium\">\n                        <input type=\"radio\" class=\"priority\" id=\"priority_medium\" name=\"priority\" value=\"M\u00E9dia\"> M\u00E9dia\n                    </label>\n                    <label for=\"priority_high\">\n                        <input type=\"radio\" class=\"priority\" id=\"priority_high\" name=\"priority\" value=\"Alta\"> Alta\n                    </label>\n                </fieldset>\n    \n                <div class=\"task_date\">\n                    <p>Tarefa inicializada em: <span class=\"current-date\">--</span></p>\n                </div>\n    \n                <div class=\"task_label\">\n                    <label for=\"task_label\">Categoria:</label>\n                    <select id=\"task_label\" name=\"labels\" aria-label=\"Escolha uma categoria\">\n                        <option value=\"Trabalho\">Trabalho</option>\n                        <option value=\"Pessoal\">Pessoal</option>\n                        <option value=\"Compromissos\">Compromissos</option>\n                        <option value=\"Estudos\">Estudos</option>\n                    </select>\n                </div>\n    \n                <div class=\"handle_task\">\n                    <button class=\"handle_task_button\" aria-label=\"Editar Tarefa\" name=\"editar\">Editar Tarefa</button>\n                    <button class=\"handle_task_button\" aria-label=\"Finalizar Tarefa\" name=\"finalizar\">Finalizar Tarefa</button>\n                </div>\n            ";
            return boxTaskChildren;
        };
        NewCardTask.applyTaskBoxStyles = function (taskBox) {
            var styles = {
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
            for (var property in styles) {
                if (styles.hasOwnProperty(property)) {
                    taskBox.style[property] = styles[property];
                }
            }
        };
        Object.defineProperty(NewCardTask.prototype, "BoxTaskChildren", {
            get: function () {
                return NewCardTask.createNewTaskBox();
            },
            enumerable: false,
            configurable: true
        });
        return NewCardTask;
    }());
    TaskManagerButtons.NewCardTask = NewCardTask;
    var DeleteNewTask = /** @class */ (function () {
        function DeleteNewTask() {
            this.deleteTaskButton = document.getElementById("delete_task");
        }
        DeleteNewTask.prototype.deleteBoxTaskChild = function (taskBox) {
            // Garantir que o pai existe e o filho também
            var parentElement = document.querySelector(".container_box_tasks");
            if (parentElement && taskBox) {
                parentElement.removeChild(taskBox);
            }
            else {
                console.error("Não foi possível encontrar o pai ou o filho.");
            }
        };
        DeleteNewTask.prototype.setupDeleteButtons = function () {
            var _this = this;
            // Adiciona o evento de exclusão para cada botão
            var deleteButtons = document.querySelectorAll(".handle_task_button[name='excluir']");
            deleteButtons.forEach(function (button) {
                button.addEventListener("click", function (event) {
                    var taskBox = event.target.closest('.task_box');
                    if (taskBox) {
                        _this.deleteBoxTaskChild(taskBox);
                    }
                });
            });
        };
        return DeleteNewTask;
    }());
    TaskManagerButtons.DeleteNewTask = DeleteNewTask;
    var ShowAllTasks = /** @class */ (function () {
        function ShowAllTasks() {
            this.showTasksCreatedButton = document.getElementById("show_registered_tasks");
        }
        return ShowAllTasks;
    }());
    TaskManagerButtons.ShowAllTasks = ShowAllTasks;
    var FilterTask = /** @class */ (function () {
        function FilterTask() {
            this.inputSearchTask = document.getElementById("task_search");
        }
        return FilterTask;
    }());
    TaskManagerButtons.FilterTask = FilterTask;
})(TaskManagerButtons || (TaskManagerButtons = {}));
var CreateTaskCard;
(function (CreateTaskCard) {
    var TaskTitle = /** @class */ (function () {
        function TaskTitle() {
            this.inputTaskTitle = document.querySelector(".task_title");
        }
        Object.defineProperty(TaskTitle.prototype, "InputTaskTitle", {
            get: function () {
                return this.inputTaskTitle;
            },
            enumerable: false,
            configurable: true
        });
        TaskTitle.prototype.setInputTaskTitleProperty = function (property, value) {
            var _a;
            if (this.inputTaskTitle) {
                this.inputTaskTitle.setAttribute(property, value);
                (_a = this.InputTaskTitle) === null || _a === void 0 ? void 0 : _a.classList.add("cursor-pointer");
            }
            return this.inputTaskTitle;
        };
        return TaskTitle;
    }());
    CreateTaskCard.TaskTitle = TaskTitle;
    var TaskDescription = /** @class */ (function () {
        function TaskDescription() {
            this.inputTaskDescription = document.querySelector(".task_description");
        }
        Object.defineProperty(TaskDescription.prototype, "InputTaskDescription", {
            get: function () {
                return this.inputTaskDescription;
            },
            enumerable: false,
            configurable: true
        });
        TaskDescription.prototype.setInputTaskDescriptionProperty = function (property, value) {
            var _a;
            if (this.inputTaskDescription) {
                this.inputTaskDescription.setAttribute(property, value);
                (_a = this.inputTaskDescription) === null || _a === void 0 ? void 0 : _a.classList.add("cursor-pointer");
            }
            return this.inputTaskDescription;
        };
        return TaskDescription;
    }());
    CreateTaskCard.TaskDescription = TaskDescription;
    var TaskPriority = /** @class */ (function () {
        function TaskPriority() {
            var _this = this;
            this.listInputRadioElements = __spreadArray([], document.querySelectorAll(".priority"), true);
            this.divBoxTextCard = document.querySelector(".box_task");
            this.listInputRadioElements.forEach(function (element) {
                element.addEventListener("click", function (evt) {
                    var target = evt.target;
                    if (_this.divBoxTextCard) {
                        if (target.id === "priority_high") {
                            _this.divBoxTextCard.style.backgroundColor = "#ff4c4c";
                        }
                        else if (target.id === "priority_medium") {
                            _this.divBoxTextCard.style.backgroundColor = "#ffa500";
                        }
                        else if (target.id === "priority_low") {
                            _this.divBoxTextCard.style.backgroundColor = "#3cb371";
                        }
                        else {
                            _this.divBoxTextCard.style.backgroundColor = "#fff";
                        }
                    }
                });
            });
        }
        TaskPriority.prototype.setInputsTaskPriorities = function (property, value) {
            return this.listInputRadioElements.map(function (radio) {
                radio.setAttribute(property, value);
                radio.classList.add("cursor-pointer");
                return radio;
            });
        };
        return TaskPriority;
    }());
    CreateTaskCard.TaskPriority = TaskPriority;
    var GetTaskDate = /** @class */ (function () {
        function GetTaskDate() {
            this.spanFormatCurrentDate = document.querySelector(".current-date");
            this.currentDate = "";
            if (this.spanFormatCurrentDate) {
                this.spanFormatCurrentDate.innerHTML = this.currentSystemDate;
            }
        }
        Object.defineProperty(GetTaskDate.prototype, "currentSystemDate", {
            get: function () {
                var ObjDate = new Date();
                var fullDate = [
                    ObjDate.getDate().toString().padStart(2, "0"),
                    (ObjDate.getMonth() + 1).toString().padStart(2, "0"),
                    ObjDate.getFullYear().toString(),
                ];
                this.currentDate = fullDate.join(" / ");
                return this.currentDate;
            },
            enumerable: false,
            configurable: true
        });
        return GetTaskDate;
    }());
    CreateTaskCard.GetTaskDate = GetTaskDate;
    var TaskLabelCategory = /** @class */ (function () {
        function TaskLabelCategory() {
            var element = document.getElementById("task_label");
            if (!element) {
                throw new Error("Elemento <select> n\u00E3o foi encontrado.");
            }
            this.selectElement = element;
        }
        Object.defineProperty(TaskLabelCategory.prototype, "SelectElementOption", {
            get: function () {
                return this.selectElement;
            },
            enumerable: false,
            configurable: true
        });
        return TaskLabelCategory;
    }());
    CreateTaskCard.TaskLabelCategory = TaskLabelCategory;
    var ManagerCurrentTask = /** @class */ (function () {
        function ManagerCurrentTask() {
            this.buttonManagerCurrentTask = __spreadArray([], document.querySelectorAll(".handle_task_button"), true);
            this.buttonManagerCurrentTask.forEach(function (e) {
                e.addEventListener("click", function (evt) {
                    var target = evt.target;
                    if (target.name === "finalizar") {
                        toggleDisabled(true);
                    }
                    else if (target.name === "editar") {
                        toggleDisabled(false);
                    }
                });
            });
        }
        return ManagerCurrentTask;
    }());
    CreateTaskCard.ManagerCurrentTask = ManagerCurrentTask;
})(CreateTaskCard || (CreateTaskCard = {}));
function toggleDisabled(state) {
    var taskTitle = document.querySelector(".task_title");
    var taskDescription = document.querySelector(".task_description");
    var inputsRadios = __spreadArray([], document.querySelectorAll(".priority"), true);
    var selectCategory = document.getElementById("task_label");
    if (taskTitle)
        taskTitle.disabled = state;
    if (taskDescription)
        taskDescription.disabled = state;
    inputsRadios.forEach(function (radio) {
        radio.disabled = state;
    });
    if (selectCategory)
        selectCategory.disabled = state;
}
document.addEventListener("DOMContentLoaded", function () {
    new TaskManagerButtons.DeleteNewTask().deleteBoxTaskChild();
    new TaskManagerButtons.ShowAllTasks();
    new TaskManagerButtons.FilterTask();
    new CreateTaskCard.TaskTitle();
    new CreateTaskCard.TaskDescription();
    new CreateTaskCard.TaskPriority();
    new CreateTaskCard.GetTaskDate();
    new CreateTaskCard.TaskLabelCategory();
    new CreateTaskCard.ManagerCurrentTask();
    var makeTaskButton = document.getElementById("make_task");
    makeTaskButton === null || makeTaskButton === void 0 ? void 0 : makeTaskButton.addEventListener("click", function () {
        var newTaskBox = TaskManagerButtons.NewCardTask.createNewTaskBox();
        var container = document.querySelector(".container_box_tasks");
        container === null || container === void 0 ? void 0 : container.appendChild(newTaskBox);
        new TaskManagerButtons.DeleteNewTask().setupDeleteButtons();
    });
});
