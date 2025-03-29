export interface Community {
  title: string;
  image: string;
  description: string;
}

export interface ArrowProps {
  onClick?: () => void;
}

export interface ApiResponse {
  success: boolean;
  data: {
    post_title: string;
    post_excerpt: string;
    image_url: string;
  }[];
}
