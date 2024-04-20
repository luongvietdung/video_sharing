class VotesController < AuthController
  before_action :set_video

  def create
    vote = @video.votes.build(user: current_user)
    if vote.save
      render json: { message: 'Voted' }, status: :created
    else
      render json: { message: vote.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_video
    @video = Video.find(params[:video_id])
  end
end
