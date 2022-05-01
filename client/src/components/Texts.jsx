import React, { Component } from 'react'
import { Panel, PanelGroup } from 'rsuite';

class Texts extends Component {
    render() {
        return (
            <PanelGroup>
                <Panel>
                    <h1 class="display-5">
                        Toshiba
                    </h1>
                </Panel>
                <Panel>
                    <p>
                        Yrityksen kuvaus
                    </p>
                </Panel>
            </PanelGroup>
        )
    }
}
export default Texts