import { EventBus, FSComponent, FsBaseInstrument, MapSystemBuilder } from "@microsoft/msfs-sdk";

class MapSampleInstrument extends FsBaseInstrument {

    constructor() {
        super();
        this.bus = new EventBus();
    }

    get templateID() {
        return "Map_Sample";
    }

    connectedCallback() {
        const mapSystem = MapSystemBuilder.create(this.bus)
            .withNearestWaypoints(_ => {})
            .withFollowAirplane()
            .build();
        
        FSComponent.render(mapSystem.map, document.querySelector('#map-element'));
    }
}

registerInstrument('map-sample', MapSampleInstrument);