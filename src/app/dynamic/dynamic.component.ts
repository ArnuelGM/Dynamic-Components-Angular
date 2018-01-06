import { 	Component, Input, OnChanges, 
			SimpleChanges, ViewChild, ViewContainerRef, 
			ComponentFactoryResolver } from '@angular/core';

@Component({
  	selector: 'app-dynamic',
  	templateUrl: './dynamic.component.html',
	styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnChanges {

	@Input() component: any;
	@ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
	
	private simpleComponent: any;

  	constructor(private resolver: ComponentFactoryResolver) { }

  	ngOnChanges(changes: SimpleChanges){
  		console.log( changes.component.currentValue );

      if(changes.component.currentValue){
    		this.loadComponent();
      }
  	}

  	loadComponent(){
      if(this.simpleComponent){
        this.simpleComponent.destroy();
      }
  		
      const factory = this.resolver.resolveComponentFactory(this.component);
  		this.simpleComponent = this.container.createComponent(factory);

  		console.log( "component:  ", this.simpleComponent.instance);
  	}

}
