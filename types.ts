import { LucideIcon } from "lucide-react";

export interface ILink {
    name: string;
    href: string;
};

export interface ICustomIcon {
    icon: LucideIcon;
    dir?: 'left' | 'right';
};

export interface ISectionTitle {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    dir?: 'left' | 'center';
};

export interface IFeature {
    icon: LucideIcon;
    title: string;
    description: string;
    cardBg?: string;
    iconBg?: string;
};

export interface IFaq {
    question: string;
    answer: string;
};

export interface ITeamMember {
    name: string;
    image: string;
    role: string;
};

export interface IPricingPlan {
    icon: LucideIcon;
    name: string;
    type?: 'enterprise' | 'popular';
    description: string;
    price: number;
    linkText: string;
    linkUrl: string;
    features: string[];
};

export interface ITestimonial {
    quote: string;
    name: string;
    handle: string;
    image: string;
    rating: 5 | 4 | 3 | 2 | 1;
};

// Facebook Post Types
export interface IFacebookAttachment {
    media?: {
        image?: {
            src: string;
            height: number;
            width: number;
        };
    };
    type: string;
    url?: string;
}

export interface IFacebookPost {
    id: string;
    message?: string;
    created_time: string;
    full_picture?: string;
    attachments?: {
        data: IFacebookAttachment[];
    };
}

export interface IFacebookAPIResponse {
    data: IFacebookPost[];
    paging?: {
        cursors: {
            before: string;
            after: string;
        };
        next?: string;
    };
}

export interface IFacebookPostCard {
    id: string;
    image: string;
    message: string;
    date: string;
    link?: string;
}