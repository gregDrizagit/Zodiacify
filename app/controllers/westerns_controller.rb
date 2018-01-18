class WesternsController < ApplicationController

  def index
    @westernhoroscopes = WesterHoroscope.all
    render json: @westernhoroscopes
  end
  def create
    @westernhoroscope = WesterHoroscope.create
    render json: @westernhoroscope
  end

  def show
    @westernhoroscope = WesterHoroscope.find(params[:id])
  end


  private
  def western_params
    params.require(:westernhoroscope).permit(:sign, :element, :quality, :planet)
  end
end
