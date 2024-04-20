# frozen_string_literal: true

class VideosController < AuthController
  skip_before_action :authenticate_user!, only: :index

  def index
    videos = Video.all
    render json: { videos: videos.map {|v| v.as_json.slice("id", "src", "title", "description") } }, status: :ok
  end

  def create
    video = Video.new(video_params)
    if video.save
      render json: { message: 'Created', video: video.as_json.slice("id", "src", "title", "description") }, status: :created
    else
      render json: { message: video.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.require(:video).permit(:src, :description, :title)
  end
end
