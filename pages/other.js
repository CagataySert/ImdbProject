import React from 'react'
import { inject, observer } from 'mobx-react'
import Link from 'next/link';

@inject('store')
@observer
class Other extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <h1>{this.props.store.message}</h1>
                <h2>ASDASD</h2>
                <Link href='/'>
                    <a>HOMEPAGE</a>
                </Link>
                <br />
                <hr />
                <button onClick={() => this.props.store.changeMessage('İKİNCİCİCİCİ')} type='button'>Click me!</button>
            </div>
        )
    }
}

export default Other;