class WesternsController < ApplicationController

  def index
    @westerns = Western.all
    render json: @westerns
  end
  def create
    @western = Western.create
    render json: @western
  end

  def show
    @western = Western.find(params[:id])
  end


  private
  def western_params
    params.require(:western).permit(:sign, :element, :quality, :planet)
  end
end
