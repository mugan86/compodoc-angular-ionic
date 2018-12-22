'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">starter-bootstrap-admin-angular6 documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n              ' + (isNormalMode ? 'data-target="#additional-pages"' : 'data-target="#xs-additional-pages"') + '>\n                <span class="icon ion-ios-book"></span>\n                <span>Acerca del proyecto</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n                ' + (isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"') + '>\n                \n                    <li class="link ">\n                        <a href="additional-documentation/a-title.html" data-type="entity-link" data-context-id="additional">A TITLE</a>\n                    </li>\n                \n                    <li class="link ">\n                        <a href="additional-documentation/b-title.html" data-type="entity-link" data-context-id="additional">B TITLE</a>\n                    </li>\n                \n                    <li class="link for-chapter2">\n                        <a href="additional-documentation/b-title/b1-title.html" data-type="entity-link" data-context-id="additional">B1 Title</a>\n                    </li>\n                \n                    <li class="link for-chapter3">\n                        <a href="additional-documentation/b-title/b1-title/b11-title.html" data-type="entity-link" data-context-id="additional">B11 Title</a>\n                    </li>\n                \n                    <li class="link for-chapter3">\n                        <a href="additional-documentation/b-title/b1-title/b12-title.html" data-type="entity-link" data-context-id="additional">B12 Title</a>\n                    </li>\n                \n                    <li class="link for-chapter3">\n                        <a href="additional-documentation/b-title/b1-title/b13-title.html" data-type="entity-link" data-context-id="additional">B13 Title</a>\n                    </li>\n                \n                    <li class="link for-chapter2">\n                        <a href="additional-documentation/b-title/b2-title.html" data-type="entity-link" data-context-id="additional">B2 Title</a>\n                    </li>\n                \n                    <li class="link for-chapter2">\n                        <a href="additional-documentation/b-title/b3-title.html" data-type="entity-link" data-context-id="additional">B3 Title</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-d64cd40e8b37345618231851690c2216"' : 'data-target="#xs-components-links-module-AppModule-d64cd40e8b37345618231851690c2216"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-d64cd40e8b37345618231851690c2216"' : 'id="xs-components-links-module-AppModule-d64cd40e8b37345618231851690c2216"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-LoginModule-6b456007c6191339ca6846e33e9353e6"' : 'data-target="#xs-components-links-module-LoginModule-6b456007c6191339ca6846e33e9353e6"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-LoginModule-6b456007c6191339ca6846e33e9353e6"' : 'id="xs-components-links-module-LoginModule-6b456007c6191339ca6846e33e9353e6"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/ForgotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-PagesModule-923cdd6d40a38e177b6aed1433c39622"' : 'data-target="#xs-components-links-module-PagesModule-923cdd6d40a38e177b6aed1433c39622"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-PagesModule-923cdd6d40a38e177b6aed1433c39622"' : 'id="xs-components-links-module-PagesModule-923cdd6d40a38e177b6aed1433c39622"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/ForgotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"') + '>\n                        <span class="icon ion-md-cog"></span>\n                        <span>Components</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="components-links"' : 'id="xs-components-links"') + '>\n                        \n                            <li class="link">\n                                <a href="components/BarChartComponent.html" data-type="entity-link">BarChartComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/BreadcrumbComponent.html" data-type="entity-link">BreadcrumbComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/ChartComponent.html" data-type="entity-link">ChartComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/CircuitsComponent.html" data-type="entity-link">CircuitsComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/DashboardComponent.html" data-type="entity-link">DashboardComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/DoughnutChartComponent.html" data-type="entity-link">DoughnutChartComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/DriversComponent.html" data-type="entity-link">DriversComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/FooterComponent.html" data-type="entity-link">FooterComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/GoogleMapsComponent.html" data-type="entity-link">GoogleMapsComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/HeaderComponent.html" data-type="entity-link">HeaderComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/LineChartComponent.html" data-type="entity-link">LineChartComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/NotpagefoundComponent.html" data-type="entity-link">NotpagefoundComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/PagesComponent.html" data-type="entity-link">PagesComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/PieChartComponent.html" data-type="entity-link">PieChartComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/PolarAreaChartComponent.html" data-type="entity-link">PolarAreaChartComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/RacesComponent.html" data-type="entity-link">RacesComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/RadarChartComponent.html" data-type="entity-link">RadarChartComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/ScrollTopComponent.html" data-type="entity-link">ScrollTopComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/SeasonsComponent.html" data-type="entity-link">SeasonsComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/SettingsComponent.html" data-type="entity-link">SettingsComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/SidebarComponent.html" data-type="entity-link">SidebarComponent</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="components/SupportComponent.html" data-type="entity-link">SupportComponent</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#directives-links"' : 'data-target="#xs-directives-links"') + '>\n                        <span class="icon ion-md-code-working"></span>\n                        <span>Directives</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"') + '>\n                        \n                            <li class="link">\n                                <a href="directives/DefaultImageDirective.html" data-type="entity-link">DefaultImageDirective</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/Marker.html" data-type="entity-link">Marker</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/CircuitsService.html" data-type="entity-link">CircuitsService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/CurrentService.html" data-type="entity-link">CurrentService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/DriversService.html" data-type="entity-link">DriversService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/LocalStorageService.html" data-type="entity-link">LocalStorageService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/RacesService.html" data-type="entity-link">RacesService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/RequestService.html" data-type="entity-link">RequestService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SeasonsService.html" data-type="entity-link">SeasonsService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SharedService.html" data-type="entity-link">SharedService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SidebarService.html" data-type="entity-link">SidebarService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/Confirm.html" data-type="entity-link">Confirm</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Constructor.html" data-type="entity-link">Constructor</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Location.html" data-type="entity-link">Location</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Login.html" data-type="entity-link">Login</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/MarkerIF.html" data-type="entity-link">MarkerIF</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Race.html" data-type="entity-link">Race</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/Season.html" data-type="entity-link">Season</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/User.html" data-type="entity-link">User</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#pipes-links"' : 'data-target="#xs-pipes-links"') + '>\n                        <span class="icon ion-md-add"></span>\n                        <span>Pipes</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"') + '>\n                        \n                            <li class="link">\n                                <a href="pipes/GoogleMapsUrlPipe.html" data-type="entity-link">GoogleMapsUrlPipe</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="pipes/GoogleStaticMapUrlPipe.html" data-type="entity-link">GoogleStaticMapUrlPipe</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="pipes/LocationTextPipe.html" data-type="entity-link">LocationTextPipe</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="pipes/WikipediaUrlMobilePipe.html" data-type="entity-link">WikipediaUrlMobilePipe</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                    <li class="link">\n                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                    </li>\n                \n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n            <li class="chapter">\n                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n            </li>\n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));