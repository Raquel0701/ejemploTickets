import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { Project } from "../project.model";
import { projectData } from "../projectdata";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-projectlist",
  templateUrl: "./projectlist.component.html",
  styleUrls: ["./projectlist.component.scss"],
})

export class ProjectlistComponent implements OnInit {
  config: any;
  collection = { count: 5, data: [] };
  UsuarioForm: FormGroup;

  breadCrumbItems: Array<{}>;

  projectData: Project[];

  constructor(private modalService: NgbModal, public fb: FormBuilder) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Projects" },
      { label: "Projects List", active: true },
    ];

    this.config = {
      itemsForPage: 5,
      currentPage: 1,
      totalItems: this.collection.count,
    };

    this.UsuarioForm = this.fb.group({
      idUsuario: ["", Validators.required],
      cedulaUsuario: ["", Validators.required],
      nombreUsuario: ["", Validators.required],
    });

    for (var i = 1; i < this.collection.count; i++) {
      let fecha = new Date();
      this.collection.data.push({
        idUsuario: i,
        cedulaUsuario: "178177263" + i,
        nombreUsuario: "Usuario " + i,
        asuntoUsuario: "CONSULTA " + i,
        fechaSolicita: fecha.getHours(),
        status: false,
      });
    }
    console.log(this.collection.data);

    this.projectData = projectData;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  eliminar(item: any): void {
    //this.collection.data.pop(item);
  }

  guardarUsuario(): void {
    this.collection.data.push(this.UsuarioForm.value);
  }
}
