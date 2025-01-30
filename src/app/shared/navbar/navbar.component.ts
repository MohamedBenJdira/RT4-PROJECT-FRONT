import { Component, OnInit, HostListener } from "@angular/core";
import { Location } from "@angular/common";
import { isUriInArray, transparentNavbarPages } from "../../utilities/routing.config";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  private lastScrollTop: number = 0;
  isNavbarHidden: boolean = false;
  sidebarVisible: boolean = false;

  constructor(public location: Location) {}

  ngOnInit() {}

  isHomePage(): boolean {
    const currentPath = this.location.path();
    return currentPath === "/home" || currentPath === "";
  }

  isNavbarTransparent(): boolean {
    const pageUri = this.location.prepareExternalUrl(this.location.path());
    return isUriInArray(transparentNavbarPages, pageUri);
  }

  sidebarToggle() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isNavbarHidden = scrollTop > this.lastScrollTop;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
