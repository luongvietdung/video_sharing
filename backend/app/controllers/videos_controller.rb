# frozen_string_literal: true

class VideosController < AuthController
  skip_before_action :authenticate_user!, only: :index

  def index
    videos = Video.includes(:votes)
    render json: VideoSerializer.new(videos, {params: {current_user: current_user}}), status: :ok
  end

  def create
    video = Video.new(video_params)
    if video.save
      render json: VideoSerializer.new(video), status: :created
    else
      render json: { message: video.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.require(:video).permit(:src, :description, :title)
  end
end
