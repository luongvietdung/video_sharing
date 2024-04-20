class VideoSerializer
  include JSONAPI::Serializer

  attributes :src, :title, :description

  attribute :voted do |video, params|
    params[:current_user] ? video.voted?(params[:current_user]) : nil
  end
end
