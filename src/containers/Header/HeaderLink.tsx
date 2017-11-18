import * as React from 'react';

interface HeaderLinkProps {
    text: string;
    link: string;
}

class HeaderLink extends React.Component<HeaderLinkProps> {

    constructor(props: HeaderLinkProps) {
        super(props);
    }

    render() {
        return (
            <div className="header-links-link">
                {this.props.text}
            </div>
        );
    }
}

export default HeaderLink;
