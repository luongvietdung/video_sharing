class IndexVideoSerializer < VideoSerializer
  set_type :video

  attribute :voted do |video, params|
    params[:current_user] ? video.voted?(params[:current_user]) : nil
  end
end
